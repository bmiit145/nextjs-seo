import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setImage } from '../utils/schema/setImage';
import { setCost } from '../utils/schema/setCost';
import { setSupply } from '../utils/schema/setSupply';
import { setTool } from '../utils/schema/setTool';
import { setStep } from '../utils/schema/setStep';
function howToJsonLd({ type = 'HowTo', keyOverride, image, estimatedCost, supply, tool, step, ...rest }) {
    const data = {
        ...rest,
        image: setImage(image),
        estimatedCost: setCost(estimatedCost),
        supply: setSupply(supply),
        tool: setTool(tool),
        step: setStep(step),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "howTo" }));
}
export default howToJsonLd;
