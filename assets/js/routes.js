routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/splash-page/',
    url: './splash-page.html',
  },
  
  {
    path: '/dashboard/',
    url: './dashboard.html',
  },
  {
    path: '/sales-report/',
    url: './sales-report.html',

    // Tabs Route
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'tab-1',

        // Fill this tab content from content string
        content: `
          <div class="block block-strong inset">
            <div class="list">
              <ul>
                <li>
                  <div class="item-content">
                    <div class="item-media"><i class="icon icon-f7"></i></div>
                    <div class="item-inner">
                      <div class="item-title">Ivan Petrov</div>
                      <div class="item-after">CEO</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                    <div class="item-media"><i class="icon icon-f7"></i></div>
                    <div class="item-inner">
                      <div class="item-title">John Doe</div>
                      <div class="item-after"> <span class="badge">5</span></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                    <div class="item-media"><i class="icon icon-f7"></i></div>
                    <div class="item-inner">
                      <div class="item-title">Jenna Smith</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        `
      },
      // Second tab
      {
        path: '/tab-2/',
        id: 'tab-2',
        // Fill this tab content with Ajax request:
        url: './pages/sales/tab2.html',
      },
      // Third tab
      {
        path: '/tab-3/',
        id: 'tab-3',
        // Load this tab content as a component with Ajax request:
        componentUrl: './pages/sales/tab3.html',
      },
    ]
  },

  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
