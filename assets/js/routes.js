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
    path: '/deposit/',
    url: './deposit.html',
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
          <div class="block no-margin-top">
            <div class="block-title">January Sales</div>
            <div class="list-header">
              <div class="item-cell">
                <div class="item-row">
                  <div class="item-cell"><div class="item-after no-padding-left">Details</div></div>
                  <div class="item-cell"><div class="text-align-right">Amount</div></div>
                </div>
              </div>
            </div>
            <div class="block block-strong inset no-margin no-padding">
              <div class="list full-width no-margin">
                <ul>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 1
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 4,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 2
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 4,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 3
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 124,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 4
                          <div class="item-footer">4000 Liters - 200 Lubes</div>
                        </div>
                        <div class="item-after">₱ 24,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 5
                          <div class="item-footer">12000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 6
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 7
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 8
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 9
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 10
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 11
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 12
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 13
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 14
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 15
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 16
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 17
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 18
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 19
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 20
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 21
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 22
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 23
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 24
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 25
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 26
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 27
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 28
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 29
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 30
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">
                          January 31
                          <div class="item-footer">2000 Liters - 100 Lubes</div>
                        </div>
                        <div class="item-after">₱ 14,200,000</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list-footer">
                <div class="item-inner no-padding item-cell">
                  <div class="item-row margin-top-5">
                    <div><div class="item-title">Total</div></div>
                    <div><div class="item-after"><div class="green"><i class="la la-long-arrow-up"></i>3.33%</div>&nbsp;&nbsp;₱ 1,234,200,000</div></div>
                  </div>
                  <div class="item-footer text-align-right">2000 Liters - 100 Lubes</div>
                </div>
              </div>
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
        url: './pages/sales/tab3.html',
      },
      {
        path: '/tab-4/',
        id: 'tab-4',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab4.html',
      },
      {
        path: '/tab-5/',
        id: 'tab-5',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab5.html',
      },
      {
        path: '/tab-6/',
        id: 'tab-6',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab6.html',
      },
      {
        path: '/tab-7/',
        id: 'tab-7',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab7.html',
      },
      {
        path: '/tab-8/',
        id: 'tab-8',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab8.html',
      },
      {
        path: '/tab-9/',
        id: 'tab-9',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab9.html',
      },
      {
        path: '/tab-10/',
        id: 'tab-10',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab10.html',
      },
      {
        path: '/tab-11/',
        id: 'tab-11',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab11.html',
      },
      {
        path: '/tab-12/',
        id: 'tab-12',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab12.html',
      },
    ]
  },

  {
    path: '/inventory/',
    url: './inventory.html',

    // Tabs Route
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'tab-1',

        // Fill this tab content from content string
        content: `
          <div class="block no-margin-top">
            <div class="block-title">January Inventory</div>
            <div class="block block-strong inset no-margin no-padding">
              <div class="list-header">
                <div class="item-cell">
                  <div class="item-row">
                    <div class="item-cell"><div class="item-after">Diesel</div></div>
                    <div class="item-cell"><div class="item-after">Premium</div></div>
                    <div class="item-cell"><div class="item-after">Unleaded</div></div>
                  </div>
                </div>
              </div>
              <div class="list full-width no-margin">
                <ul>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 1 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 2 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 3<span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 4 <span class="float-right">136,000 Liters</span></div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 5 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 6 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 7 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 8 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 9 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 10 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 11 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 12 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 13 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 14 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 15 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 16 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 17 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 18 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 19 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 20 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 21 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 22 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 23 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 24 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 25 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 26 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 27 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 28 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 29 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 30 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item-content">
                      <div class="item-inner item-cell">
                        <div class="item-row margin-top-5">
                          <div class="item-cell"><div class="item-after no-padding-left">122,000 L</div><span data-progress="70" class="progressbar color-blue margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">12,000 L</div><span data-progress="40" class="progressbar color-red margin-top-5"></span></div>
                          <div class="item-cell"><div class="item-after no-padding-left">2,000 L</div><span data-progress="30" class="progressbar color-green margin-top-5"></span></div>
                        </div>
                        <div class="item-footer margin-top-10">January 31 <span class="float-right">136,000 Liters</span></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list-footer">
                <div class="item-inner no-padding-right item-cell">
                  <div class="item-title">Total</div>
                  <div class="item-row margin-top-5">
                    <div class="item-cell">
                      <div class="text-align-center">
                        <div id="j1td-inv" class="c-progressbar sm"></div>
                        <div class="content-block-inner">7,500 L<br><span class="item-footer">15, 000 L</span></div>
                      </div>
                    </div>
                    <div class="item-cell">
                      <div class="text-align-center">
                        <div id="j1tp-inv" class="c-progressbar sm"></div>
                        <div class="content-block-inner">7,500 L<br><span class="item-footer">15, 000 L</span></div>
                      </div>
                    </div>
                    <div class="item-cell">
                      <div class="text-align-center">
                        <div id="j1tu-inv" class="c-progressbar sm"></div>
                        <div class="content-block-inner">7,500 L<br><span class="item-footer">15, 000 L</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      // Second tab
      {
        path: '/tab-2/',
        id: 'tab-2',
        // Fill this tab content with Ajax request:
        url: './pages/inventory/tab2.html',
      },
      // Third tab
      {
        path: '/tab-3/',
        id: 'tab-3',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab3.html',
      },
      {
        path: '/tab-4/',
        id: 'tab-4',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab4.html',
      },
      {
        path: '/tab-5/',
        id: 'tab-5',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab5.html',
      },
      {
        path: '/tab-6/',
        id: 'tab-6',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab6.html',
      },
      {
        path: '/tab-7/',
        id: 'tab-7',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab7.html',
      },
      {
        path: '/tab-8/',
        id: 'tab-8',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab8.html',
      },
      {
        path: '/tab-9/',
        id: 'tab-9',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab9.html',
      },
      {
        path: '/tab-10/',
        id: 'tab-10',
        // Load this tab content as a component with Ajax request:
        url: './pages/sales/tab10.html',
      },
      {
        path: '/tab-11/',
        id: 'tab-11',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab11.html',
      },
      {
        path: '/tab-12/',
        id: 'tab-12',
        // Load this tab content as a component with Ajax request:
        url: './pages/inventory/tab12.html',
      },
    ]
  },
  
  {
    path: '/settings/',
    url: './settings.html',
  },
  
  {
    path: '/settings-edit/',
    url: './settings-edit.html',
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
