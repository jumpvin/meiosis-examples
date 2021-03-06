import { range } from "../util/fp"

export const view = ({ actions }) => state => {
  const filter = state.articlesFilter
  const currentPageNumber = (filter.offset / filter.limit) + 1
  const pageList = range(1, Math.ceil(state.articlesCount / filter.limit) + 1)
  const from = filter.offset + 1
  const to = Math.min(from + filter.limit - 1, state.articlesCount)

  return ["nav",
    ["ul.pagination",
      pageList.map(pageNumber =>
        ["li.page-item", { className: { "active": pageNumber === currentPageNumber } },
          ["a.page-link",
            { onClick: () => actions.loadArticles({
              offset: (pageNumber - 1) * filter.limit,
              tag: filter.tag,
              limit: filter.limit
            }) },
            pageNumber
          ]
        ]
      )
    ],
    state.articlesCount > 0
      ? ["div", "Displaying ", from, " - ", to, " of ", state.articlesCount]
      : ["div", "No articles here... yet."]
  ]
}
