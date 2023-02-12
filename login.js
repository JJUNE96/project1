

		//로그인
		const form2 = document.querySelector('#sub_login');
		const btnSubmit2 = form2.querySelector('input[type=submit]');
	
		btnSubmit2.addEventListener('click',(e)=>{
			if (!isTxt2('userid2')) e.preventDefault();
			if(!isPwd2("pwd3")) e.preventDefault();
		});
	
		

		//id 
	function isTxt2(el, len) {
		if (len === undefined) len = 2;
		let input = form2.querySelector(`[name=${el}]`);
		let txt = input.value;
	
		if (txt.length >= len) {
			
			const errMsgs = input.closest('td').querySelectorAll('p');
			if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
	
			return true;
		} else {
			const errMsgs = input.closest('td').querySelectorAll('p');
			if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
	
			let errMessage = document.createElement('p');
			errMessage.append(`입력항목을 ${len}글자 이상 입력하셔야 합니다.`);
			input.closest('td').append(errMessage);
			return false;
		}
	}
	
	
	//2.password 
	function isPwd2(el1, len) {
		if (len === undefined) len = 5;
		let pwd3 = form2.querySelector(`[name=${el1}]`);
		let pwd3_value = pwd3.value;
	
	
		const num = /[0-9]/;
		const eng = /[a-zA-Z]/;
		const spc = /[~!@#$%^&*()_+?<>]/;
	
		if (
			pwd3_value.length >= len &&
			num.test(pwd3_value) &&
			eng.test(pwd3_value) &&
			spc.test(pwd3_value)
		) {
			const errMsgs = pwd3.closest('td').querySelectorAll('p');
			if (errMsgs.length > 0) pwd3.closest('td').querySelector('p').remove();
	
			return true;
		} else {
			const errMsgs = pwd3.closest('td').querySelectorAll('p');
			if (errMsgs.length > 0) return false;
	
			let errMessage = document.createElement('p');
			errMessage.append(`비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 포함하여 입력하세요`);
			pwd3.closest('td').append(errMessage);
			return false;
		}
	}
	