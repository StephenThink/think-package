<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application for file storage.
    |
    */

    'default' => env('FILESYSTEM_DISK', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Below you may configure as many filesystem disks as necessary, and you
    | may even configure multiple disks for the same driver. Examples for
    | most supported storage drivers are configured here for reference.
    |
    | Supported drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/private'),
            'serve' => true,
            'throw' => false,
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
            'throw' => false,
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
            'throw' => false,
            // 'visibility' => 'public', // https://statamic.dev/assets#visibility
        ],

        'assets' => [
            'driver' => 'local',
            'root' => public_path('assets'),
            'url' => '/assets',
            'visibility' => 'public',
            'throw' => false,
        ],

        'heroes' => [
            'driver' => 'local',
            'root' => public_path('assets').'/hero',
            'url' => '/assets/hero',
            'visibility' => 'public',
            'throw' => false,
        ],

        'portrait-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/portrait',
            'url' => '/assets/content/images/portrait',
            'visibility' => 'public',
            'throw' => false,
        ],

        'landscape-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/landscape',
            'url' => '/assets/content/images/landscape',
            'visibility' => 'public',
            'throw' => false,
        ],

        'full-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/full_width',
            'url' => '/assets/content/images/full_width',
            'visibility' => 'public',
            'throw' => false,
        ],

        'gallery' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/gallery',
            'url' => '/assets/content/images/gallery',
            'visibility' => 'public',
            'throw' => false,
        ],

        'news-thumbnail' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/news-thumbnail',
            'url' => '/assets/content/images/news-thumbnail',
            'visibility' => 'public',
            'throw' => false,
        ],

        'content-video' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/videos',
            'url' => '/assets/content/videos',
            'visibility' => 'public',
            'throw' => false,
        ],

        'content-video-poster' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/videos/poster',
            'url' => '/assets/content/videos/poster',
            'visibility' => 'public',
            'throw' => false,
        ],

        'team-mugshot' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/team',
            'url' => '/assets/content/images/team',
            'visibility' => 'public',
            'throw' => false,
        ],

        'socials' => [
            'driver' => 'local',
            'root' => public_path('assets').'/socials',
            'url' => '/assets/socials',
            'visibility' => 'public',
            'throw' => false,
        ],

        'social-icons' => [
            'driver' => 'local',
            'root' => public_path('assets').'/social-icons',
            'url' => '/assets/social-icons',
            'visibility' => 'public',
            'throw' => false,
        ],

        'mixed-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/mixed',
            'url' => '/assets/content/images/mixed',
            'visibility' => 'public',
            'throw' => false,
        ],

        'bento-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/bento',
            'url' => '/assets/content/images/bento',
            'visibility' => 'public',
            'throw' => false,
        ],

        'map-image' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/maps',
            'url' => '/assets/content/images/maps',
            'visibility' => 'public',
            'throw' => false,
        ],

        'vertical-scroller' => [
            'driver' => 'local',
            'root' => public_path('assets').'/content/images/vertical-scroller',
            'url' => '/assets/content/images/vertical-scroller',
            'visibility' => 'public',
            'throw' => false,
        ],

        'documents' => [
            'driver' => 'local',
            'root' => public_path('assets').'/documents',
            'url' => '/documents',
            'visibility' => 'public',
            'throw' => false,
        ],

        'reports' => [
            'driver' => 'local',
            'root' => public_path('assets').'/documents/reports',
            'url' => '/documents/reports',
            'visibility' => 'public',
            'throw' => false,
        ],

        'think-creative' => [
            'driver' => 'local',
            'root' => public_path('think'),
            'url' => '/think',
            'visibility' => 'public',
            'throw' => false,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
