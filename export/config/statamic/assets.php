<?php

return [

    'image_manipulation' => [

        /*
        |--------------------------------------------------------------------------
        | Route Prefix
        |--------------------------------------------------------------------------
        |
        | The route prefix for serving HTTP based manipulated images through Glide.
        | If using the cached option, this should be the URL of the cached path.
        |
        */

        'route' => 'img',

        /*
        |--------------------------------------------------------------------------
        | Require Glide security token
        |--------------------------------------------------------------------------
        |
        | With this option enabled, you are protecting your website from mass image
        | resize attacks. You will need to generate tokens using the Glide tag
        | but may want to disable this while in development to tinker.
        |
        */

        'secure' => true,

        /*
        |--------------------------------------------------------------------------
        | Image Manipulation Driver
        |--------------------------------------------------------------------------
        |
        | The driver that will be used under the hood for image manipulation.
        | Supported: "gd" or "imagick" (if installed on your server)
        |
        */

        'driver' => 'gd',

        /*
        |--------------------------------------------------------------------------
        | Additional Image Extensions
        |--------------------------------------------------------------------------
        |
        | Define any additional image file extensions you would like Statamic to
        | process. You should ensure that both your server and the selected
        | image manipulation driver properly supports these extensions.
        |
        */

        'additional_extensions' => [
            // 'heic',
        ],

        /*
        |--------------------------------------------------------------------------
        | Save Cached Images
        |--------------------------------------------------------------------------
        |
        | Enabling this will make Glide save publicly accessible images. It will
        | increase performance at the cost of the dynamic nature of HTTP based
        | image manipulation. You will need to invalidate images manually.
        |
        */

        'cache' => false,
        'cache_path' => public_path('img'),

        /*
        |--------------------------------------------------------------------------
        | Image Manipulation Defaults
        |--------------------------------------------------------------------------
        |
        | You may define global defaults for all manipulation parameters, such as
        | quality, format, and sharpness. These can and will be be overwritten
        | on the tag parameter level as well as the preset level.
        |
        */

        'defaults' => [
            // 'quality' => 50,
        ],

        /*
        |--------------------------------------------------------------------------
        | Image Manipulation Presets
        |--------------------------------------------------------------------------
        |
        | Rather than specifying your manipulation params in your templates with
        | the glide tag, you may define them here and reference their handles.
        | They may also be automatically generated when you upload assets.
        | Containers can be configured to warm these caches on upload.
        |
        */

        'presets' => [
            'content-video-posters' => ['w' => 600, 'h' => 400, 'q' => 80, 'fit' => 'crop_focal', 'format' => 'webp'],
            'team-mugshot' => ['w' => 120, 'h' => 120, 'q' => 70, 'fit' => 'crop_focal', 'format' => 'webp'],
            // 'small' => ['w' => 200, 'h' => 200, 'q' => 75, 'fit' => 'crop'],

            'gallery-full' => ['q' => 90, 'format' => 'webp'],
            'gallery-image' => ['q' => 90, 'fit' => 'crop_focal', 'format' => 'webp'],
            //            'gallery-image' => ['w' => 960, 'h' => 480, 'q' => 90, 'fit' => 'crop_focal', 'format' => 'webp', 'sharp' => 15],

            'error-image' => ['w' => 500, 'h' => 500, 'q' => 90, 'format' => 'webp'],

            //            'hero' => ['w' => 1920, 'h' => 1080, 'q' => 90, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-xs-webp' => ['w' => 320, 'h' => 180, 'q' => 85, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-sm-webp' => ['w' => 360, 'h' => 202.5, 'q' => 85, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-md-webp' => ['w' => 740, 'h' => 415.5, 'q' => 85, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-lg-webp' => ['w' => 980, 'h' => 550.5, 'q' => 85, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-xl-webp' => ['w' => 1140, 'h' => 641.25, 'q' => 95, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-2xl-webp' => ['w' => 1360, 'h' => 765, 'q' => 95, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-3xl-webp' => ['w' => 1750, 'h' => 981.25, 'q' => 95, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-4xl-webp' => ['w' => 1920, 'h' => 1080, 'q' => 95, 'fit' => 'crop_focal', 'format' => 'webp'],
            'hero-4k-webp' => ['w' => 2560, 'h' => 1440, 'q' => 95, 'fit' => 'crop_focal', 'format' => 'webp'],

            //            'full-image' => ['w' => 1920, 'h' => 1080, 'q' => 90, 'fit' => 'crop_focal', 'format' => 'webp'],
            'full-image-xs-webp' => ['w' => 320, 'h' => 180, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-sm-webp' => ['w' => 360, 'h' => 202.5, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-md-webp' => ['w' => 740, 'h' => 415.5, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-lg-webp' => ['w' => 980, 'h' => 550.5, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-xl-webp' => ['w' => 1140, 'h' => 641.25, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-2xl-webp' => ['w' => 1360, 'h' => 765, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-3xl-webp' => ['w' => 1750, 'h' => 981.25, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-4xl-webp' => ['w' => 1920, 'h' => 1080, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'full-image-4k-webp' => ['w' => 2560, 'h' => 1440, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],

            //            'portrait_image' => ['w' => 470, 'h' => 704, 'q' => 80, 'fit' => 'crop_focal', 'format' => 'webp'],
            'portrait-image-xs-webp' => ['w' => 320, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-sm-webp' => ['w' => 360, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-md-webp' => ['w' => 740, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-lg-webp' => ['w' => 980, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-xl-webp' => ['w' => 1140, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-2xl-webp' => ['w' => 1360, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-3xl-webp' => ['w' => 1750, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-4xl-webp' => ['w' => 1920, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'portrait-image-4k-webp' => ['w' => 2560, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],

            //            'landscape_image' => ['w' => 600, 'h' => 400, 'q' => 80, 'fit' => 'crop_focal', 'format' => 'webp'],
            'landscape-image-xs-webp' => ['w' => 320, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-sm-webp' => ['w' => 360, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-md-webp' => ['w' => 740, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-lg-webp' => ['w' => 980, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-xl-webp' => ['w' => 1140, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-2xl-webp' => ['w' => 1360, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-3xl-webp' => ['w' => 1750, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-4xl-webp' => ['w' => 1920, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'landscape-image-4k-webp' => ['w' => 2560, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],

            'mixed-image-webp' => ['w' => 960, 'h' => 540, 'q' => 90, 'fit' => 'crop_focal', 'format' => 'webp'],
            'mixed-image-xs-webp' => ['w' => 320, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-sm-webp' => ['w' => 360, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-md-webp' => ['w' => 740, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-lg-webp' => ['w' => 980, 'h' => 10000, 'q' => 85, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-xl-webp' => ['w' => 1140, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-2xl-webp' => ['w' => 1360, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-3xl-webp' => ['w' => 1750, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-4xl-webp' => ['w' => 1920, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],
            'mixed-image-4k-webp' => ['w' => 2560, 'h' => 10000, 'q' => 95, 'fit' => 'contain', 'format' => 'webp'],

            'vertical-scroller-webp' => ['w' => 750, 'h' => 750, 'q' => 90, 'fit' => 'crop_focal', 'format' => 'webp'],
        ],

        /*
        |--------------------------------------------------------------------------
        | Generate Image Manipulation Presets on Upload
        |--------------------------------------------------------------------------
        |
        | By default, presets will be automatically generated on upload, ensuring
        | the cached images are available when they are first used. You may opt
        | out of this behavior here and have the presets generated on demand.
        |
        */

        'generate_presets_on_upload' => true,

    ],

    /*
    |--------------------------------------------------------------------------
    | Auto-Crop Assets
    |--------------------------------------------------------------------------
    |
    | Enabling this will make Glide automatically crop assets at their focal
    | point (which is the center if no focal point is defined). Otherwise,
    | you will need to manually add any crop related parameters.
    |
    */

    'auto_crop' => true,

    /*
    |--------------------------------------------------------------------------
    | Control Panel Thumbnail Restrictions
    |--------------------------------------------------------------------------
    |
    | Thumbnails will not be generated for any assets any larger (in either
    | axis) than the values listed below. This helps prevent memory usage
    | issues out of the box. You may increase or decrease as necessary.
    |
    */

    'thumbnails' => [
        'max_width' => 10000,
        'max_height' => 10000,
    ],

    /*
    |--------------------------------------------------------------------------
    | File Previews with Google Docs
    |--------------------------------------------------------------------------
    |
    | Filetypes that cannot be rendered with HTML5 can opt into the Google Docs
    | Viewer. Google will get temporary access to these files so keep that in
    | mind for any privacy implications: https://policies.google.com/privacy
    |
    */

    'google_docs_viewer' => false,

    /*
    |--------------------------------------------------------------------------
    | Cache Metadata
    |--------------------------------------------------------------------------
    |
    | Asset metadata (filesize, dimensions, custom data, etc) will get cached
    | to optimize performance, so that it will not need to be constantly
    | re-evaluated from disk. You may disable this option if you are
    | planning to continually modify the same asset repeatedly.
    |
    */

    'cache_meta' => true,

    /*
    |--------------------------------------------------------------------------
    | Focal Point Editor
    |--------------------------------------------------------------------------
    |
    | When editing images in the Control Panel, there is an option to choose
    | a focal point. When working with third-party image providers such as
    | Cloudinary it can be useful to disable Statamic's built-in editor.
    |
    */

    'focal_point_editor' => true,

    /*
    |--------------------------------------------------------------------------
    | Enforce Lowercase Filenames
    |--------------------------------------------------------------------------
    |
    | Control whether asset filenames will be converted to lowercase when
    | uploading and renaming. This can help you avoid file conflicts
    | when working in case-insensitive filesystem environments.
    |
    */

    'lowercase' => true,

    /*
    |--------------------------------------------------------------------------
    | Additional Uploadable Extensions
    |--------------------------------------------------------------------------
    |
    | Statamic will only allow uploads of certain approved file extensions.
    | If you need to allow more file extensions, you may add them here.
    |
    */

    'additional_uploadable_extensions' => [],

    /*
    |--------------------------------------------------------------------------
    | SVG Sanitization
    |--------------------------------------------------------------------------
    |
    | Statamic will automatically sanitize SVG files when uploaded to avoid
    | potential security issues. However, if you have a valid reason for
    | disabling this, and you trust your users, you may do so here.
    |
    */

    'svg_sanitization_on_upload' => true,

];
