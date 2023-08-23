import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      /*
            для работы с css модулями используется лоадер css-loader
            лоадер можно описать двумя способами, как ниже пример с sass-loader, то есть строкой 
            либо как в этом примере- объектом 
            */
      {
        //для того что бы вебпак понял что это лоадер используется ключ loader
        loader: "css-loader",
        options: {
          /*ключ modules нужен для того что бы работали css модули (пример - button.module.s/css) 
            в самом простом варианте, для того что бы css модули начали работать нужно modules установить в true
​
              modules:true
​
            однако мы столкнемся с проблемой что уникальный ключ стиля (.button ->QkvefAOOp) будет  генерироваться и для scss файлов также 
            поэтому в модули передаем объект с ключами auto и localIdentName
          */
          modules: {
            /* 
        это свойство которое принимает bool | regExp | func, нужно для того что бы определить для каких файлов 
        применять либо не применять css модули
        в данном случае, используется функция, которая параметром принимает строку, 
        делает проверку, есть ли в файле .modules. и вовзращает либо true либо false
          */
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            /*
                свойство задает название генерируемым файлам,для дев сборки, для удобства работы в дев режите: 
                [path]->сохраняется путь до компонента
                [name]-> название компонента 
                [local] -> название css класса
                [hash] -> хэш
            */

            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgrWebpack = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const fonts = {
    test: /\.(?:eot|ttf|woff|woff2)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name][ext]",
    },
  };

  const imagesLoade = {
    test: /\.(gif|png|jpe?g|webp)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name][ext]",
    },
    use: [
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75,
          },
        },
      },
    ],
  };

  return [typescriptLoader, cssLoader, svgrWebpack, fonts, imagesLoade];
}
