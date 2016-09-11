<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit40e59cfdf43d232ac451de0f87aedd5a
{
    public static $fallbackDirsPsr0 = array (
        0 => __DIR__ . '/..' . '/kwizer15/jquery',
        1 => __DIR__ . '/..' . '/kwizer15/highcharts',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->fallbackDirsPsr0 = ComposerStaticInit40e59cfdf43d232ac451de0f87aedd5a::$fallbackDirsPsr0;

        }, null, ClassLoader::class);
    }
}