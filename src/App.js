import Card from './Card'
import './App.css'
import chroma from 'chroma-js'

function App() {

  return (
    <div className="App dark" id="app">

      <div className="border-b border-black pb-3">
        <div className="container mx-auto px-6 sm:px-16 md:px-24 lg:px-48 xl:px-64">
          <h1 className="pt-8 text-center">Accessible-By-Default Semantic Color Tokens</h1>
          <p>
            <strong>What is this?</strong><br />
            This is an experiment that mashes the output from <a href="https://www.npmjs.com/package/@adobe/leonardo-contrast-colors">Adobe Leonardo</a> into
            the Tailwind config. Additionally, it uses the <a href="https://github.com/JakeNavith/tailwindcss-theme-variants">Theme Variants Tailwind Plugin</a>
            to make it easy to maintain multiple themes (in this experiment, AA and AAA rated light and dark themes).
          </p>
          <p>
            <strong>What problem does this solve?</strong><br />
            Design systems normally take a "primitive token" approach. A designer will come up with a color palette with some number of steps, 
            numbered to match a scale similar to the css font-weight property. Tailwind takes this same approach, giving you colors like blue-500, 
            blue-600, blue-700, etc.
          </p>
          <p>
            This works great for a system like Tailwind, which encourages experimentation and is used by many people. The problem is that it's
            hard to ensure that the color choices are both 1) accessible, and 2) consistent across your project. Designers usually have to pick
            a level of accessibility they're comfortable with (usually AA), then a set of colors from the primitive palette that best meet those
            requirements. However, this is usually a matter of designing for the lowest common denominator (e.g. making <em>all</em> text 7:1 
            just in case AAA must someday be met, even though larger text can get away with lower contrast ratios).
          </p>
          <p>
            <strong>Accessibility</strong><br />
            Currently, maintaining accessibility is a very manual process. A designer might maintain a running list of color combinations that have
            an adequate contrast ratio, but this generally becomes a very large list and third party tools are often required. Primitive palettes
            are often not designed with accessibility in mind, as in the case of Tailwind. Your gray-400 is 2.54:1, which falls below the 3:1 threshold
            for large text and icons. So you're forced to use gray-500, which is a big jump to 4.83:1. Even though there are 3 main contrast "levels" 
            to contend with (3.0, 4.5, and 7.0), Tailwind's defaults force you into using gray-500 and gray-600.
          </p>
          <p>
            The approach taken by Leonardo is ingenious. You define colors <em>by desired output contrast ratio</em>. You define a color scale, and give it a
            set of output ratios you want, such as gray-3, gray-4.5, and gray-7. You can easily modulate this based on the darkness of your background
            color, making it really easy to hit required contrast ratios across a range of different themes, without <em>any</em> manual checking
            or designing for the lowest common denominator.
          </p>
          <p>
            <strong>Consistency</strong><br/>
            The consistency problem can marginally be solved with components. Your button component only has a background defined in a single
            place, and used everywhere, so developers don't need to remember that buttons should have the class bg-purple-600. The issue
            shows up for design elements <em>which are not themselves componentizable</em>, such as a border. A border might show up in a huge
            number of different components. Keeping consistency across a whole dev team is a problem if developers need to remember an
            arbitrary rule like "borders are always gray-300." You <em>could</em> mix primitive tokens and semantic tokens by adding
            custom properties in Tailwind's config that sit alongside the primitive tokens. In practice, this confuses things further. The
            best solution is to enforce semantic tokens across the board.
          </p>
          <p>
            <strong>The experiment</strong><br/>
            The right column shows the new approach. Visually it's not going to look much different than what's on the left. To see the magic,
            check out the following files:
            <ul className="list-disc list-inside my-2">
              <li className="mb-2"><code>./src/index.css</code></li>
              <li className="mb-2"><code>./src/exponentColors.css</code></li>
              <li className="mb-2"><code>./tailwind.config.js</code> (lines 26&ndash;41)</li>
            </ul>
          </p>
        </div>

      </div>
      <div className="flex">
        <div className="flex-1 border-r border-black">
          <h1 className="pt-8 text-center">Tailwind</h1>
          <div className="text-xs">
            <div className="p-2 border-l-40 border-gray-50">Gray50 ({chroma.contrast('#fff', '#F9FAFB').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-100">Gray100 ({chroma.contrast('#fff', '#F3F4F6').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-200">Gray200 ({chroma.contrast('#fff', '#E5E7EB').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-300">Gray300 ({chroma.contrast('#fff', '#D1D5DB').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-400">Gray400 ({chroma.contrast('#fff', '#9CA3AF').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-500">Gray500 ({chroma.contrast('#fff', '#6B7280').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-600">Gray600 ({chroma.contrast('#fff', '#4B5563').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-700">Gray700 ({chroma.contrast('#fff', '#374151').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-800">Gray800 ({chroma.contrast('#fff', '#1F2937').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-gray-900">Gray900 ({chroma.contrast('#fff', '#111827').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-blue-600">Blue600 ({chroma.contrast('#fff', '#2563eb').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-blue-800">Blue800 ({chroma.contrast('#fff', '#1e40af').toFixed(2)})</div>
          </div>
          <Card theme="light" title="Light AA" cardVariant="tw" />
          <Card theme="light-AAA" title="Light AAA" cardVariant="tw" />
          <Card theme="dark" title="Dark AA" cardVariant="tw" />
          <Card theme="dark-AAA" title="Dark AAA" cardVariant="tw" />

        </div>
        <div className="flex-1">
          <h1 className="pt-8 text-center">Exponent</h1>
          <div className="text-xs">
            <div className="p-2 border-l-40 border-light-lo-fg">Lo Foreground ({chroma.contrast('#fff', 'rgb(253, 254, 254)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-lo-bg">Lo Background ({chroma.contrast('#fff', 'rgb(242, 243, 244)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-lo-border">Lo Border ({chroma.contrast('#fff', 'rgb(143, 148, 161)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-lo-large-text">Lo Large Text ({chroma.contrast('#fff', 'rgb(143, 148, 161)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-lo-normal-text">Lo Normal Text ({chroma.contrast('#fff', 'rgb(111, 118, 135)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-hi-fg">Hi Foreground ({chroma.contrast('#fff', 'rgb(253, 254, 254)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-hi-bg">Hi Background ({chroma.contrast('#fff', 'rgb(253, 254, 254)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-hi-border">Hi Border ({chroma.contrast('#fff', 'rgb(111, 118, 135)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-hi-large-text">Hi Large Text ({chroma.contrast('#fff', 'rgb(111, 118, 135)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-light-hi-normal-text">Hi Normal Text ({chroma.contrast('#fff', 'rgb(82, 88, 104)').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-primary-mid">Primary Mid ({chroma.contrast('#fff', '#436ded').toFixed(2)})</div>
            <div className="p-2 border-l-40 border-primary-hi">Primary Hi ({chroma.contrast('#fff', '#2751bc').toFixed(2)})</div>
          </div>

          <Card theme="light" title="Light AA" cardVariant="exponent" />
          <Card theme="light-AAA" title="Light AAA" cardVariant="exponent" />
          <Card theme="dark" title="Dark AA" cardVariant="exponent" />
          <Card theme="dark-AAA" title="Dark AAA" cardVariant="exponent" />

        </div>
      </div>

    </div>
  );
}

export default App;
