<?php

namespace App\Widgets;

use Statamic\Widgets\Widget;
use Statamic\Facades\GlobalSet;
use Statamic\Facades\Collection;
use Illuminate\Support\Facades\File;
use Statamic\Facades\YAML;

class Thinkcreative extends Widget
{


    /**
     * The HTML that should be shown in the widget.
     *
     * @return string|\Illuminate\View\View
     */
    public function html()
    {

        //        Access Site Admin Global
        $siteAdmin = GlobalSet::findByHandle('site_admin');

        //        Is training Area Active?
        $trainingArea = $siteAdmin->inCurrentSite()->get('has_training_mode');

        //        Is there a Google Analytics Area?
        $googleAnalytics = $this->readYaml('content/seo/site/analytics.yaml', 'data.use_google_tag_manager');

        //        Is there a Team Members Collection?
        $teamMembers = Collection::handleExists('team_members');

        //        Is there a Reports Collection?
        $reports = Collection::handleExists('reports');



        return view('widgets.thinkcreative', compact('trainingArea', 'teamMembers', 'reports', 'showGA', 'googleAnalytics'));
    }


    public function readYaml($path, $arrayLocation = null)
    {
        // Define the full file path
        $filePath = base_path($path);

        // Check if the file exists
        if (!File::exists($filePath)) {
            return false;
        }

        // Read file contents
        $yamlContent = File::get($filePath);

        // Parse YAML content into an array
        $parsedData = Yaml::parse($yamlContent);

        // If an array location is provided, navigate the array safely
        if ($arrayLocation) {
            return data_get($parsedData, $arrayLocation, 'Key not found');
        }

        return $parsedData; // Return full parsed YAML if no key is provided
    }

}
