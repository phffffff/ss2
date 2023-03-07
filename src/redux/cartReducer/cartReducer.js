const initState = {
    listPhone: [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },
    ],
    phone: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    cartPhones: [

    ]
}

const cartReducer = (state = initState, action) => {
    let { cartPhones } = state;
    let newCartPhones = [];
    let newPhone = ''

    switch (action.type) {

        case "SELECT_PHONE":
            newPhone = state.listPhone.find((item) => item.maSP === action.payload)

            return {
                ...state,
                phone: {
                    ...newPhone
                }
            }
        case "ADD_PHONE":
            let idx = cartPhones.findIndex(item => item.maSP === action.phone.maSP)
            if (idx === -1) {
                newCartPhones = [...cartPhones, action.phone]
            } else {
                cartPhones[idx].count += 1;
                newCartPhones = [...cartPhones]
            }
            return {
                ...state,
                cartPhones: [...newCartPhones]
            }
        case "DEL_PHONE":
            newCartPhones = cartPhones.filter(item => item.maSP !== action.payload)
            return {
                ...state,
                cartPhones: [...newCartPhones]
            }
        case "CHANGE_COUNT":
            cartPhones && cartPhones.length &&
                cartPhones.forEach((item) => {
                    if (item.maSP === action.phone.id) {
                        if (item.count === 1 && action.phone.count === -1) {
                            alert("Số lượng tối thiểu là 1")
                        } else {
                            item.count += action.phone.count
                        }
                    }
                    newCartPhones = [...newCartPhones, item]
                })
            return {
                ...state,
                cartPhones: [...newCartPhones]
            }

        default:
            return { ...state }
    }

}

export default cartReducer;

