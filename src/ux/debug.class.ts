export class UxDebugClass {

    public static readonly TAGLINE = 'UX2';

    public static readonly ERROR_TAGLINE = '[ERROR]: ';

    public static readonly WARNING_TAGLINE = '[WARNING]: ';

    public static readonly INFO_TAGLINE = '[INFO]: '

    public static isDebugEnabled = false;

    public static error(error: string): void {
        console.error(UxDebugClass.TAGLINE + UxDebugClass.ERROR_TAGLINE + error);
    }

    public static warn(warning: string): void {
        if (UxDebugClass.isDebugEnabled) {
            console.warn(UxDebugClass.TAGLINE + UxDebugClass.WARNING_TAGLINE + warning);
        }
    }

    public static info(info: string): void {
        if (UxDebugClass.isDebugEnabled) {
            console.info(UxDebugClass.TAGLINE + UxDebugClass.INFO_TAGLINE + info);
        }
    }

    public static enableDebug(enableDebug: boolean): void {
        UxDebugClass.isDebugEnabled = enableDebug;
    }

}
