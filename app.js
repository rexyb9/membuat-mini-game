class Start {
    constructor() {
        this.playerName = "Player"
        this.botName = "BotJs"
        this.playerOption
        this.botOption
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption
    }

    set setBotOption(option) {
        this.botOption = option
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"]
        const bot = option[Math.floor(Math.random() * option.length)]
        return bot
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!`
        } else {
            return `WAAA ${this.winner}, GAK ADA YG MENANG 🤪`
        }
    }
}

function handleClick(params) {
    const start = new Start()
    start.setPlayerOption = params
    start.setBotOption = start.botBrain()
    start.winCalculation()

    const inGame = document.getElementById("row")
    const result = document.getElementById("pemenang")

    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult()
    }, 1500)

}
