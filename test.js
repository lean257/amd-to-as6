require(["test/mom", "test/kid", "test/foo"], function (mom, kid, foo) {
    function anon() {
        require(["test/bar"], function (bar) {
            console.log("I have 2 requires in B.js");
        });
    }
});
