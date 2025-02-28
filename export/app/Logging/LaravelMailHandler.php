<?php

namespace App\Logging;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Monolog\Handler\AbstractProcessingHandler;

class LaravelMailHandler extends AbstractProcessingHandler
{
    /**
     * Write the log record.
     *
     * @param  array  $record
     */
    protected function write(array|\Monolog\LogRecord $record): void
    {
        // Extract formatted content from the record
        $content = $record['message'];

        // Retrieve the HTTP referer (if available)
        $referrer = Request::header('referer');

        // Check if a referrer is available
        if ($referrer) {
            // Append the referrer information to the email content
            $content .= "\nReferrer: $referrer";
        } else {
            // Indicate if no referrer information is available
            $content .= "\nNo referrer information available";
        }

        // Retrieve the current URL
        $currentUrl = Request::fullUrl();

        // Append the current URL to the email content
        $content .= "\nCurrent URL: $currentUrl";

        // Get the origin IP address of the request
        $ipAddress = Request::ip();

        // Append the IP address to the email content
        $content .= "\nOrigin IP Address: $ipAddress";

        // Retrieve the user agent of the visitor
        $userAgent = Request::header('user-agent');

        // Append the user agent information to the email content
        $content .= "\nUser Agent: $userAgent";

        // Check if the request is an API call based on headers or URL
        $isApiCall = false;

        // Check for specific headers indicating an API call
        if (Request::header('Accept') === 'application/json' || Request::wantsJson()) {
            $isApiCall = true;
        }

        // Check if the URL contains a known API endpoint pattern
        if (strpos(Request::url(), '/api/') !== false) {
            $isApiCall = true;
        }

        // Check for a custom header indicating an API call
        if (Request::header('X-Requested-With') === 'XMLHttpRequest') {
            $isApiCall = true;
        }

        // Append API call information to the email content
        $content .= "\nAPI Call: ".($isApiCall ? 'Yes' : 'No');

        // Retrieve the user agent of the visitor
        $userAgent = Request::header('user-agent');

        // Check if the request is from a bot based on the user agent
        $isBot = false;

        if (strpos(strtolower($userAgent), 'bot') !== false || strpos(strtolower($userAgent), 'crawler') !== false) {
            $isBot = true;
        }

        // Append bot information to the email content
        $content .= "\nIs Bot: ".($isBot ? 'Yes' : 'No');

        // Retrieve session information if available
        if (session()->isStarted()) {
            // Example session data, adjust as per your application's session structure
            $sessionId = session()->getId();
            $userId = auth()->id(); // Assuming you're using Laravel's built-in authentication
            // Append session information to the email content
            $content .= "\nSession ID: $sessionId\nUser ID: $userId";
        }

        // Add error codes, stack trace, timestamp, and environment information as needed

        // Use Laravel's Mail facade to send the email
        Mail::raw($content, function ($message) {
            // Set the recipient, sender, and subject of the email
            $message->to('stephen@thinkcreative.uk')
                ->from(env('ADMIN_EMAIL', 'website@thinkcreative.uk'))
                ->subject('Error occurred in your Laravel application');
        });
    }
}
