export default function getCtx() {
    const canvas = document.getElementById("bilza");
    const ctx = canvas.getContext("2d");
    if (ctx == null) {
        throw new Error("ctx error");
    }
    return ctx;
}
