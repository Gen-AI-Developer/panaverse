
export default function Home() {
  return (
    <html lang="en" className="bg-gray-900">
      <div className="text-gray-900 rounded-lg shadow-lg bg-white text-sm font-bold my-3 mx-3">
        <nav className="p-3">
          <header className="text-4xl mb-4 p-2 rounded-md">C++ Documentation</header>
          <div className="">
            <a href="#Intro" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Introduction</a>
            <a href="#Object" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Objects and Classes</a>
            <a href="#Inheritance" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Inheritance</a>
            <a href="#Polymorphism" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Polymorphism</a>
            <a href="#Abstraction" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Abstraction</a>
            <a href="#Encapsulation" className="hover:text-white shadow-indigo-400 p-2 hover:bg-gray-600 rounded-md active:text-blue-600">
              Encapsulation</a>
          </div>
        </nav>

      </div>
      <div className="text-gray-900 shadow-lg bg-white text-sm font-bold my-3 mx-3 p-4">
        <h2 id="Intro" className="text-4xl mb-3">Introduction to C++</h2>
        <p>
          C++ is a general purpose programming
          language and widely used now a days '
          for competitive programming. It has
          imperative, object-oriented and generic
          programming features. C++ runs on lots of
          platform like Windows, Linux, Unix, Mac etc.
          C++ is an efficient
          and powerful language and finds wide use
          in various GUI platforms, 3D graphics and
          real-time simulations. Because of the
          inclusion of rich function libraries,
          working in C++ becomes simpler and
          convenient than C. Being object-oriented
          programming like Java, C++ provides
          the support of inheritance, polymorphism,
          encapsulation, etc. Unlike C, C++ allows
          exception handling and function overloading.
        </p>
      </div>
      <div className="text-gray-900 shadow-lg bg-white text-sm font-bold my-3 mx-3 p-4">
        <h2 id="Code" className="text-2xl mb-3">Code Example</h2>
        <p>

        </p>
      </div>
    </html>
  );
}
