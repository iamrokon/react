import React from "react";

interface ButtonProps {
    change: (locale: string) => void;
    locale: string;
    show: boolean;
}
class Button extends React.Component<ButtonProps> {
    shouldComponentUpdate(nextProps: Readonly<ButtonProps>): boolean {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            console.log('I am not rendering');
            return false;
        }
        console.log('I am rendering');
        return true;
    }
    render(){
        const { change, locale, show } = this.props;
        return(
            <>
                <button type="button" onClick={() => change(locale)}>{ locale === 'bn-BD' ? 'বাংলা' : 'English'}</button>
                {show && <p>Hello World</p>}
            </>
        );
    }
}

export default Button;