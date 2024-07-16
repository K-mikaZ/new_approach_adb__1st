# alternative generic selector

alternative to generic `*##` selector ( equivalent to: `/^(?<domains>\S+)$/` )
> because that selects all URLs ( also extension pages,  about:blank frames )
> and this creates significant slowdowns in ublock ( especially with "application filters" ), example:
> 
> `[about:blank][set-cookie ⁝ euconsent-v2 ⁝ CQBpHQAQBpHQAAHABBENA8EgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA ⁝ ] Done`

best => `/^(?<domains>\S+\b(?<!excluded>\b(?:(about:|[^-]-extension:))))$/`

> Read:
> + [Lookaround](https://www.regular-expressions.info/lookaround.html)
> + [negative lookbehind - caniuse.com](https://caniuse.com/js-regexp-lookbehind)

Simplified become => `/^\S+\b(?<!\b(?:[^-](?:-.+)?:))$/`

> Page test: <https://regex101.com/r/jbJ7pJ/8>
