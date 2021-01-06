### To Develop:

1. `yarn`
2. `yarn start`

# Accessible-By-Default Semantic Color Tokens

## What is this?

This is an experiment that mashes the output from [Adobe Leonardo](https://www.npmjs.com/package/@adobe/leonardo-contrast-colors) into
the Tailwind config. Additionally, it uses the [Theme Variants Tailwind Plugin](https://github.com/JakeNavith/tailwindcss-theme-variants)
to make it easy to maintain multiple themes (in this experiment, AA and AAA rated light and dark themes).

## What problem does this solve?

Design systems normally take a "primitive token" approach. A designer will come up with a color palette with some number of steps, 
numbered to match a scale similar to the css font-weight property. Tailwind takes this same approach, giving you colors like `blue-500`, 
`blue-600`, `blue-700`, etc.

This works great for a system like Tailwind, which encourages experimentation and is used by many people. The problem is that it's
hard to ensure that the color choices are both 1) accessible, and 2) consistent across your project. Designers usually have to pick
a level of accessibility they're comfortable with (usually AA), then a set of colors from the primitive palette that best meet those
requirements. However, this is usually a matter of designing for the lowest common denominator (e.g. making _all_ text 7:1 
just in case AAA must someday be met, even though larger text can get away with lower contrast ratios).

## Accessibility

Currently, maintaining accessibility is a very manual process. A designer might maintain a running list of color combinations that have
an adequate contrast ratio, but this generally becomes a very large list and third party tools are often required. Primitive palettes
are often not designed with accessibility in mind, as in the case of Tailwind. Your `gray-400` is 2.54:1, which falls below the 3:1 threshold
for large text and icons. So you're forced to use `gray-500`, which is a big jump to 4.83:1. Even though there are 3 main contrast "levels" 
to contend with (3.0, 4.5, and 7.0), Tailwind's defaults force you into using `gray-500` and `gray-600`.

The approach taken by Leonardo is ingenious. You define colors _by desired output contrast ratio_. You define a color scale, and give it a
set of output ratios you want, such as `gray-3`, `gray-4.5`, and `gray-7`. You can easily modulate this based on the darkness of your background
color, making it really easy to hit required contrast ratios across a range of different themes, without _any_ manual checking
or designing for the lowest common denominator.

## Consistency

The consistency problem can marginally be solved with components. Your button component only has a background defined in a single
place, and used everywhere, so developers don't need to remember that buttons should have the class `bg-purple-600`. The issue
shows up for design elements _which are not themselves componentizable_, such as a border. A border might show up in a huge
number of different components. Keeping consistency across a whole dev team is a problem if developers need to remember an
arbitrary rule like "borders are always `gray-300`." You _could_ mix primitive tokens and semantic tokens by adding
custom properties in Tailwind's config that sit alongside the primitive tokens. In practice, this confuses things further. The
best solution is to enforce semantic tokens across the board.
