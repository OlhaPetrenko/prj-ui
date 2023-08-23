import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    //указываются расширения файлы, при импорте которых не будут указываться расширения
    extensions: [".tsx", ".ts", ".js"],
    //Предпочитать абсолютные пути
    preferAbsolute: true,
    /*
        нужно для настройки имопрта из node_modules 
​
            было
            import Module from '../../../../node_modules/module';
            
            стало
            import Module from 'module';
​
        */
    modules: [options.paths.src, "node_modules"],
    //главный файл
    mainFiles: ["index"],
    //создают псевдоними для упрощения импорта
    alias: {},
  };
}
