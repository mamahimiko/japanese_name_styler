"use server"
import * as deepl from "deepl-node"

export async function fetchLanguages() {
    const authKey: string = process.env.API_KEY_DEEPL!;
    if (!authKey) {
        throw new Error("No authKey")
    }
    const deeplClient = new deepl.DeepLClient(authKey);


    try {
        const sourceLanguages = await deeplClient.getSourceLanguages();
        for (let i = 0; i < sourceLanguages.length; i++) {
            const lang = sourceLanguages[i];
            console.log(`${lang.name} (${lang.code})`);
            return sourceLanguages
        }
    } catch (error) {
        console.log("error!")
    }

}

export async function translation(name: string, code: string) {
    const authKey: string = process.env.API_KEY_DEEPL!;
    if (!authKey) {
        throw new Error("No authKey")
    }
    const deeplClient = new deepl.DeepLClient(authKey);
    try {
        const result = await deeplClient.translateText(
            name,
            code as deepl.SourceLanguageCode,
            "ja");
        console.log(result)
        return result

    } catch (error) {
        console.error("translation error:", error);
        return null
    }

}

