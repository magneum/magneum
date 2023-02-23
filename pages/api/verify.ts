export default async function search(request: any, response: any) {
try {
response.redirect("/");
} catch (error: any) {
console.log(error);
return response.status(500).json({
status: "error",
message: error.mesage,
});
}
}
