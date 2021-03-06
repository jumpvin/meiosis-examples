import { Route, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

export const view = ({ actions }) => (state, article) => {
  const username = article.author.username

  return [".article-preview",
    [".article-meta",
      ["a", { href: getUrl(Route.of.Profile({ username: article.author.username })) },
        ["img", { src: article.author.image || defaultImage }]
      ],
      [".info",
        ["a.author",
          { href: getUrl(Route.of.Profile({ username: article.author.username })) },
          username],
        ["span.date", new Date(article.createdAt).toDateString()]
      ],
      [".pull-xs-right",
        ["button.btn.btn-sm",
          {
            className: {
              "btn-primary": article.favorited,
              "btn-outline-primary": !article.favorited
            },
            onClick: article.favorited
              ? () => actions.unfavoriteArticle(state, article.slug)
              : () => actions.favoriteArticle(state, article.slug)
          },
          ["i.ion-heart"],
          ["span", ` ${article.favoritesCount} `]
        ]
      ]
    ],
    [".preview-link",
      ["a.preview-link", { href: `#/article/${article.slug}` },
        ["h1", article.title],
        ["p", article.description],
        ["span", "Read more..."]
      ],
      ["ul.tag-list",
        article.tagList.map(tag =>
          ["li.tag-default.tag-pill.tag-outline",
            ["a", { href: getUrl(Route.of.Home(), { tag }) }, tag]
          ]
        )
      ]
    ]
  ]
}
