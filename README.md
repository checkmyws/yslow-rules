yslow-rules
===========

This is a translation project of the Yahoo! YSlow Rules maintained with the help of contributors:

- [Steve Souders](http://stevesouders.com/), creator of YSlow
- Yahoo! Inc.
- Marcel Duran, maintainer of [YSlow.org](http://yslow.org/)
- [Check my Website](http://www.checkmy.ws/) for the french translation

## The tools

We use Github and [Hugo](http://hugo.spf13.com/) to produce the web pages from individual rule file in markdown. The rules are published on Github Pages.

## The repository organisation

- `content` : the main direcotry for the rules in every languages
- `content/en` : The official english rules taken from Yahoo
- `content/fr` : The rules in french. 
- `layouts` : Templates and layouts for the web pages
- `layouts/leads` : The HTML for the page lead. One par available language.
- `layouts/intro` : The HTML for the page introduction. One par available language.

## How to help

You can make a new translation available by copying the `en` directory in `locale`. `locale` is the code of the translated language. If you make a spanisg translation, this gives you a `es` folder. Translate every rule in the folder and you're done. Give attention to change the locale in the header of the rule.

Ypu can correct any mistake you find in a translation. All you have to do is clicking the edit icon to make your correction and make a pull request.

You can make a beautiful design for the website.

You can tell the word about the project to empower new translators. We all need performant websites all around the world :)

The YSlow are licensed under the [new BSD license](http://yslow.org/faq/#faq_license)
