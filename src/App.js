import Card from './Card'
import './App.css';


function App() {

  return (
    <div className="App dark" id="app">

      <div className="flex">
        <div className="flex-1 border-r border-black">
          <h1 className="py-8 text-center">Tailwind Gray</h1>
          <p className="text-gray-700 p-6">
            Based on a set of primitive tokens (e.g. gray-100, gray-200, etc). This is easy to work with, but requires you to maintain a separate mapping from primitive tokens to semantic tokens. Otherwise, you'll end up with inconsistences in your atomic design elements. For instance, things like borders are common across many components, but not components themselves. What frequently happens on larger projects is you'll find borders are set to, say, gray-200 in some areas, gray-300 in others, unless you have documented and religiously refer to some separate mapping that says "borders are always X."
          </p>
          <div className="flex text-center text-xs">
            <div className="flex-1 p-1 border-b-40 border-gray-50">50</div>
            <div className="flex-1 p-1 border-b-40 border-gray-100">100</div>
            <div className="flex-1 p-1 border-b-40 border-gray-200">200</div>
            <div className="flex-1 p-1 border-b-40 border-gray-300">300</div>
            <div className="flex-1 p-1 border-b-40 border-gray-400">400</div>
            <div className="flex-1 p-1 border-b-40 border-gray-500">500</div>
            <div className="flex-1 p-1 border-b-40 border-gray-600">600</div>
            <div className="flex-1 p-1 border-b-40 border-gray-700">700</div>
            <div className="flex-1 p-1 border-b-40 border-gray-800">800</div>
            <div className="flex-1 p-1 border-b-40 border-gray-900">900</div>
          </div>
          <Card theme="light" title="Light AA" cardVariant="tw" />
          <Card theme="light-AAA" title="Light AAA" cardVariant="tw" />
          <Card theme="dark" title="Dark AA" cardVariant="tw" />
          <Card theme="dark-AAA" title="Dark AAA" cardVariant="tw" />

        </div>
        <div className="flex-1">
          <h1 className="py-8 text-center">Exponent Gray</h1>
          <p className="text-gray-700 p-6">
            An alternative approach is to <em>only</em> allow semantic tokens in the design system. Rather than needing to remember that border colors are always gray-300, you just need to set an element's border color to border-color. Additionally, since the primitive tokens are generated with <a href="https://www.npmjs.com/package/@adobe/leonardo-contrast-colors">Adobe Leonardo</a>, they are generated based on the desired contrast ratio which makes maintaining an accessible color palette child's play. For instance, text color isn't set to some arbitrary hex value, or even a primitive token like gray-600. Its input is instead "contrast ratio: 4.5". An accessible color palette is achieved by design and with no extra effort.
          </p>
          <div className="flex text-center text-xs">
            <div className="flex-1 p-1 border-b-40 border-gray-50">50</div>
            <div className="flex-1 p-1 border-b-40 border-gray-100">100</div>
            <div className="flex-1 p-1 border-b-40 border-gray-200">200</div>
            <div className="flex-1 p-1 border-b-40 border-gray-300">300</div>
            <div className="flex-1 p-1 border-b-40 border-gray-400">400</div>
            <div className="flex-1 p-1 border-b-40 border-gray-500">500</div>
            <div className="flex-1 p-1 border-b-40 border-gray-600">600</div>
            <div className="flex-1 p-1 border-b-40 border-gray-700">700</div>
            <div className="flex-1 p-1 border-b-40 border-gray-800">800</div>
            <div className="flex-1 p-1 border-b-40 border-gray-900">900</div>
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
