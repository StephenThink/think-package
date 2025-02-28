<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class ReportingTerms extends Scope
{
    /**
     * Apply the scope.
     *
     * @param  \Statamic\Query\Builder  $query
     * @param  array  $values
     * @return void
     */
    public function apply($query, $values)
    {
        $items = $query->get();

        foreach ($items as $entry) {
            $reportTypes = $entry->get('report_type');
            if (is_array($reportTypes) && count($reportTypes) > 0) {
                $terms = implode('|', array_map(function ($term) {
                    return ucwords(str_replace('-', ' ', $term));
                }, $reportTypes));
                $entry->set('terms', $terms);
                $entry->save();
            }
        }

    }
}
