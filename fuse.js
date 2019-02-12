const { FuseBox, QuantumPlugin, WebIndexPlugin } = require("fuse-box");
const plugins = [];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "index",
    })
  );
}

const fuse = FuseBox.init({
  homeDir: "src",
  sourceMaps: true,
  target: "browser@es5",
  output: "./public/$name.js",
  plugins,
});

if (process.env.NODE_ENV == "development") {
  fuse
    .bundle("index")
    .instructions(`> client/index.tsx`)
    .watch("client/**");
  fuse.run();
} else {
  fuse.bundle("index").instructions(`> client/index.tsx`);
  fuse.run();
}
