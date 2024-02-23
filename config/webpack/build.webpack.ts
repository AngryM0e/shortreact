import { BuildOptions } from './interfaces/config.interface';

import { pluginsWebpack } from './plugins.webpack';
import { loadersWebpack } from './loaders.webpack';
import { devServerWebpack } from './devserver.webpack';

// Функция представляет собой конструктор конфигурации Webpack.
export function buildWebpack(options: BuildOptions) {
  const { mode, paths, port } = options;

  const isDev = mode === 'development';

  return {
    mode, // Режим сборки (development, production)
    entry: paths.entry, // Точка входа
    output: {
      filename: '[name].[hash].js', // Имя выходного файла с хешем для кэширования
      path: paths.output, // Путь к выходному каталогу
      clean: true, // Очищать выходной каталог перед каждой сборкой
      publicPath: '/', // Публичный путь для загрузки статических ресурсов
    },
    plugins: pluginsWebpack(paths), // Плагины Webpack
    module: { rules: loadersWebpack() }, // Загрузчики модулей
    resolve: { extensions: ['.tsx', '.ts', '.js'] }, // Настройки разрешения модулей
    devtool: isDev ? 'inline-source-map' : undefined, // Source maps в режиме разработки
    devServer: isDev ? devServerWebpack(port) : undefined, // Конфигурация DevServer в режиме разработки
  };
}
