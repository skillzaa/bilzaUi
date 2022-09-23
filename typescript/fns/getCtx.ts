

export default function getCtx():CanvasRenderingContext2D{
const canvas = document.getElementById("bilza") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx == null){throw new Error("ctx error");
}
return ctx;

}