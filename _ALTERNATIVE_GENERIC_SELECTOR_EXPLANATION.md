# [FIX] Alternative generic selector

alternative to generic `*##` selector ( equivalent to: `/^(?<domains>\S+)$/` )
> because that selects all URLs ( also extension pages,  about:blank frames )
> and this creates significant slowdowns in ublock ( especially with "application filters" ), example:
> 
> `[about:blank][set-cookie ⁝ euconsent-v2 ⁝ CQBpHQAQBpHQAAHABBENA8EgAAAAAAAAAAqIAAAAAAAA.YAAAAAAAAAAA ⁝ ] Done`

best => `/^(?<domains>\S+\b(?<!excluded>\b(?:(about:|[^-]-extension:|localhost))))$/`

> Read:
> + [Lookaround part 1](//www.regular-expressions.info/lookaround.html), [Lookaround part 2](//www.regular-expressions.info/lookaround2.html) - <regular-expressions.info>
> + [negative lookbehind](//caniuse.com/js-regexp-lookbehind) - <caniuse.com>

Simplified become => `/^\S+\b(?<!\b(?:([^-](?:-.+):|localhost)))$/`

> [Page test](https://regex101.com/r/jbJ7pJ/9) - <regex101.com>
