import Event from "sap/ui/base/Event";
import Button from "sap/ui/webc/main/Button";
import Input from "sap/ui/webc/main/Input";
import Toast from "sap/ui/webc/main/Toast";
import BaseController from "./BaseController";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class App extends BaseController {

	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}

	public onClick(event : Event) : void {
		const button = event.getSource() as Button;
		const input = this.byId("myInput") as Input;
		const toast = this.byId("myToast") as Toast;
		toast.setText(`Button text: "${button.getText()}"\nInput value: "${input.getValue()}"`);
		toast.show();
	}

}
