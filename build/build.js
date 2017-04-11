import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Bundling for production'))

webpack(webpackConfig).run((err, status) => {
    if (err) {
        console.log(chalk.red(err))
        return 1;
    }

    var jsonStats = status.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.error.map(error => chalk.red(error))
    }

    if (jsonStats.hasWarnings) {
        console.lo
        return jsonStats.warnings.map(warning => chalk.yello(warning))
    }

    console.log(chalk.green('all good: ${status}'))

    return 0;
});