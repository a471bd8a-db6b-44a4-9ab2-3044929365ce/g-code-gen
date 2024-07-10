// place files you want to import through the `$lib` alias in this folder.

export function genGCodeLoop(
    path: string[],
    z_min: number,
    z_increment: number,
    z_max: number,
    repeats: number,
) {
    const res: string[] = [];
    let z_cur = z_min;
    for (let c = 0; c < repeats; ++c) {
        res.push(`G1 Z${z_cur.toFixed(3)}`);
        res.push(...path);
        
        if(z_cur + z_increment < z_min)z_increment = -z_increment;
        if(z_cur + z_increment > z_max)z_increment = - z_increment;
        z_cur += z_increment;
        
    }

    return res;
}

// console.log(
//   gen(["Y-0,3", "X55", "Y-7", "X26"], 30, 0.025, 33.5)
//     .map((v) => "G1 " + v)
//     .join("\n")
// );
