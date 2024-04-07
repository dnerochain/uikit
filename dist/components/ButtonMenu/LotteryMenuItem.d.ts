import { BaseButtonProps, PolymorphicComponent } from "../Button/types";
interface LotteryMenuItemProps extends BaseButtonProps {
    isActive?: boolean;
    activeBackground?: string;
    inActiveBackground?: string;
}
declare const LotteryMenuItem: PolymorphicComponent<LotteryMenuItemProps, "button">;
export default LotteryMenuItem;
