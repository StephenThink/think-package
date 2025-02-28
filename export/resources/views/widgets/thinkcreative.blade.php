<div class="widget_thinkcreative card p-0 content">
    <div class="py-2 px-4 border-b header">
        <div class="w-full lg:w-1/2 pr-5 flex items-start">
            <img src="/think/site/icons/think.svg" class="tc_logo" alt="Think!Creative Logo">
        </div>
    </div>
    <div class="py-3 px-4 border-b">
        <p>Welcome to the dashboard for the {{ env( 'APP_NAME' ) }} website. Below are some quick links to the most commonly updated areas of the website.</p>
        <p>If you require any help, please email us at <a href="mailto:helpdesk@thinkcreative.uk">helpdesk@thinkcreative.uk</a>.</p>
    </div>
    <div class="flex flex-wrap p-2">
        <a href="{{ cp_route('collections.show', ['pages']) }}" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
            <div class="h-8 w-8 mr-2 text-grey-80">
                @cp_svg('icons/light/collection')
            </div>
            <div class="flex-1">
                <h3 class="mb-1 widget-title" >View Pages</h3>
                <p>See all the main pages that make the backbone of the site.</p>
            </div>
        </a>
        {{--        <a href="{{ cp_route('collections.show', ['blog']) }}" class="w-full lg:w-1/2 p-2 flex items-start hover:bg-grey-20 rounded-md group">--}}
        {{--            <div class="h-8 w-8 mr-2 text-grey-80">--}}
        {{--                 @cp_svg('content-writing')--}}
        {{--            </div>--}}
        {{--            <div class="flex-1">--}}
        {{--                <h3 class="mb-1 widget-title" >View Blog Posts</h3>--}}
        {{--                <p>View all the Blog Posts.</p>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a href="{{ cp_route('collections.show', ['case_studies']) }}" class="w-full lg:w-1/2 p-2 flex items-start hover:bg-grey-20 rounded-md group">--}}
        {{--            <div class="h-8 w-8 mr-2 text-grey-80">--}}
        {{--                @cp_svg('content-writing')--}}
        {{--            </div>--}}
        {{--            <div class="flex-1">--}}
        {{--                <h3 class="mb-1 widget-title" >View Case Studies</h3>--}}
        {{--                <p>People we have worked with.</p>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a href="{{ cp_route('collections.show', ['employees']) }}" class="w-full lg:w-1/2 p-2 flex items-start hover:bg-grey-20 rounded-md group">--}}
        {{--            <div class="h-8 w-8 mr-2 text-grey-80">--}}
        {{--                 @cp_svg('users-box')--}}
        {{--            </div>--}}
        {{--            <div class="flex-1">--}}
        {{--                <h3 class="mb-1 widget-title" >View Employees</h3>--}}
        {{--                <p>Make additions or changes to the current members of the Think Team.</p>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a href="{{ cp_route('taxonomies.show', ['core']) }}" class="w-full lg:w-1/2 p-2 flex items-start hover:bg-grey-20 rounded-md group">--}}
        {{--            <div class="h-8 w-8 mr-2 text-grey-80">--}}
        {{--                @cp_svg('collections')--}}
        {{--            </div>--}}
        {{--            <div class="flex-1">--}}
        {{--                <h3 class="mb-1 widget-title" >Core Services</h3>--}}
        {{--                <p>This links to a collection called services, looks like it is a category style / filter.</p>--}}
        {{--            </div>--}}
        {{--        </a>--}}
        {{--        <a href="{{ cp_route('taxonomies.show', ['services_filter']) }}" class="w-full lg:w-1/2 p-2 flex items-start hover:bg-grey-20 rounded-md group">--}}
        {{--            <div class="h-8 w-8 mr-2 text-grey-80">--}}
        {{--                 @cp_svg('collections')--}}
        {{--            </div>--}}
        {{--            <div class="flex-1">--}}
        {{--                <h3 class="mb-1 widget-title" >Services Filter</h3>--}}
        {{--                <p>This links to a collection called Case Studies.</p>--}}
        {{--            </div>--}}
        {{--        </a>--}}
            @if($teamMembers)
                <a href="{{ cp_route('collections.show', ['team_members']) }}" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
                    <div class="h-8 w-8 mr-2 text-grey-80">
                        @cp_svg('icons/light/user_groups')
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-1 widget-title" >Team Members</h3>
                        <p>Add, Edit and Remove team members.</p>
                    </div>
                </a>
            @endif
        @if($reports)
            <a href="{{ cp_route('collections.show', ['reports']) }}" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
                <div class="h-8 w-8 mr-2 text-grey-80">
                    @cp_svg('icons/light/book-open')
                </div>
                <div class="flex-1">
                    <h3 class="mb-1 widget-title" >Reports</h3>
                    <p>Add, Edit and Remove reports.</p>
                </div>
            </a>
        @endif

        <a href="{{ cp_route('globals.update', ['client']) }}" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
            <div class="h-8 w-8 mr-2 text-grey-80">
                @cp_svg('icons/light/hammer-wrench')
            </div>
            <div class="flex-1">
                <h3 class="mb-1 widget-title" >Company Details</h3>
                <p>Update the information relating to your Company.</p>
            </div>
        </a>
        @if($trainingArea)
            <a target="_blank" href="/training" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
                <div class="h-8 w-8 mr-2 text-grey-80">
                    @cp_svg('icons/light/eye')
                </div>
                <div class="flex-1">
                    <h3 class="mb-1 widget-title" >Training</h3>
                    <p>Browse some information regarding Statamic, this opens in a new tab.</p>
                </div>
            </a>
        @endif
        @if($googleAnalytics)
            <a target="_blank" href="https://analytics.google.com/" class="w-full lg:w-1/2 p-2 flex items-center hover:bg-grey-20 rounded-md group">
                <div class="h-8 w-8 mr-2 text-grey-80">
                    @cp_svg('icons/light/settings-horizontal')
                </div>
                <div class="flex-1">
                    <h3 class="mb-1 widget-title" >Goto Google Analytics</h3>
                    <p>Browse some information regarding visitors to your site, this opens in a new tab.</p>
                </div>
            </a>
        @endif
    </div>

</div>
