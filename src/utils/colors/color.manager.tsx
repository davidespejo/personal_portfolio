import { colors } from '../../config/colors';
import Color from '../../interfaces/color.interface';

export default class ColorManager {
	static getColor = (name: string): Color => {
		return colors.filter((color: Color): boolean => {
			return color.name === name;
		})[0];
    };
    
    static generateCssColors = () => {
        return (
			<style>
				{"\
					:root{\
				"}
				{
					colors.map((color: Color) => {
						return `
							--${color.name}: ${color.value};
						`;
					})
				}
				{"\
					}\
				"}
				{
					``
				}
			</style>
		);
    };
}
