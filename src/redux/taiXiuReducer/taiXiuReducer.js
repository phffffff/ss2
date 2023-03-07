const initState = {
    option: true,
    totalPlay: 0,
    win: 0,
    xiNgaus: [
        { diem: 1, img: './taixiu/1.png' },
        { diem: 1, img: './taixiu/1.png' },
        { diem: 1, img: './taixiu/1.png' },
    ]
}

const taiXiuReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_OPTION":
            return {
                ...state,
                option: action.flag
            }
        case "PLAY_GAME":
            let random = 0
            let newXiNgaus = [...Array(3)].map((item) => {
                random = Math.ceil(Math.random() * 6)
                return {
                    diem: random,
                    img: `./TaiXiu/${random}.png`
                }
            })

            let totalPoint = newXiNgaus.reduce((acc, cur) => {
                return acc + cur.diem
            }, 0)

            let win = state.win;
            let totalPlay = state.totalPlay;

            if (totalPoint > 10 && state.option || totalPoint <= 10 && !state.option) {
                win += 1
            }

            totalPlay += 1

            return {
                ...state,
                xiNgaus: [...newXiNgaus],
                win: win,
                totalPlay: totalPlay,
            }
        default:
            return { ...state }
    }
}

export default taiXiuReducer;