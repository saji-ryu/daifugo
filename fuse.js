const { FuseBox, StyledComponentsPlugin, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  target: "browser@es6",
  homeDir: "src",
  output: "public/js/$name.js",
  sourceMaps: true,
  plugins: [
    //StyledComponentsPlugin(),
    process.env.NODE_ENV === "production" &&
      QuantumPlugin({
        treeshake: true,
        uglify: true,
        bakeApiIntoBundle: "bundle",
      }),
  ],
});

if (process.env.NODE_ENV != "production") {
  fuse
    .bundle("bundle")
    .instructions(" > client/index.tsx")
    .watch();
} else {
  fuse.bundle("bundle").instructions(" > client/index.tsx");
}
fuse.run();
