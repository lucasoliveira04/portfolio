let navigate;

export const setNavigate = (nav) => {
    navigate = nav;
}

export const handleNavigate = (url) => {
    if (!navigate) return;
    navigate(url);
}