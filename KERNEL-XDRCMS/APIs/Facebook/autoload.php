<?php
spl_autoload_register(function ($class) {
    // project-specific namespace prefix
    $prefix = 'Facebook\\';

    // For backwards compatibility
    $customBaseDir = '';
    // @todo v6: Remove support for 'FACEBOOK_SDK_V4_SRC_DIR'
    if (defined('FACEBOOK_SDK_V4_SRC_DIR')) {
        $customBaseDir = FACEBOOK_SDK_V4_SRC_DIR;
    } elseif (defined('FACEBOOK_SDK_SRC_DIR')) {
        $customBaseDir = FACEBOOK_SDK_SRC_DIR;
    }
    // base directory for the namespace prefix
    $baseDir = $customBaseDir ?: __DIR__ . '/';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relativeClass = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = rtrim($baseDir, '/') . '/' . str_replace('\\', '/', $relativeClass) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});