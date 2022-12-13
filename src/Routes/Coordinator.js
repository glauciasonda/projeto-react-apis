
export  const goToHome = (navigate) => {
    navigate("/");
}

export const goToMyPage = (navigate) => {
    navigate("/mypage");
}

export const  goToDetail = (navigate, idPokemon) => {
    navigate(`/detail/${idPokemon}`)
}