import fetchUser from "./githubAPI";

(async () => {
    const userData = await fetchUser("mojodna");
    document.querySelector("h1").innerHTML = JSON.stringify(userData);
})();