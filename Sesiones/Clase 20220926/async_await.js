async function taskAsync(num) {
    const nums = [];

    for (let i = 0; i < num; i++) {
        const n = 1 + Math.floor(Math.random() * 6);
        nums.push(n);

        if (n === 6) {
            return {
                error: true,
                message: "Se ha procesado un 6"
            };
        }
    }

    return {
        error: false,
        message: nums
    };
}

async function execute() {
    const resultado = await taskAsync(10);
    console.log("Resultado: ", resultado);
}

execute();