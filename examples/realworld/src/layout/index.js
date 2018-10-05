import { HomePage, LoginPage, RegisterPage, ArticleEditPage, SettingsPage }
  from "../util/constants"

export const Header = {
  view: ({ actions }) => model => {
    const active = pageId => ({ className: { "active": model.pageId === pageId } })

    return ["nav.navbar.navbar-light",
      [".container",
        ["a.navbar-brand", { href: actions.getUrl(HomePage) }, "conduit"],
        ["ul.nav.navbar-nav.pull-xs-right",
          ["li.nav-item", active(HomePage),
            //["a.nav-link", { href: actions.getUrl(HomePage) }, "Home"]
            ["a.nav-link", { href: "#/", onClick: () => actions.navigateToHome() }, "Home"]
          ],
          model.user ? [
            ["li.nav-item", active(ArticleEditPage),
              ["a.nav-link", { href: actions.getUrl(ArticleEditPage) },
                ["i.ion-compose"],
                ["span", { innerHTML: "&nbsp;New Post" }]
              ]
            ],
            ["li.nav-item", active(SettingsPage),
              ["a.nav-link", { href: actions.getUrl(SettingsPage) },
                ["i.ion-gear-a"],
                ["span", { innerHTML: "&nbsp;Settings" }]
              ]
            ],
            ["li.nav-item", active("username"),
              ["a.nav-link", { href: "/@" + model.user.username },
                model.user.username]
            ]
          ] : [
            ["li.nav-item", active(LoginPage),
              //["a.nav-link", { href: actions.getUrl(LoginPage) }, "Sign in"]
              ["a.nav-link", { href: "#/", onClick: () => actions.navigateToLogin() }, "Sign in"]
            ],
            ["li.nav-item", active(RegisterPage),
              //["a.nav-link", { href: actions.getUrl(RegisterPage) }, "Sign up"]
              ["a.nav-link", { href: "#/", onClick: () => actions.navigateToRegister() }, "Sign up"]
            ]
          ]
        ]
      ]
    ]
  }
}

export const Footer = {
  view: ({ actions }) => _model =>
    ["footer",
      [".container",
        ["a.logo-font", { href: actions.getUrl(HomePage) }, "conduit"],
        ["span.attribution",
          "An interactive learning project from ",
          ["a[href=https://thinkster.io]", "Thinkster"],
          ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
        ]
      ]
    ]
}
