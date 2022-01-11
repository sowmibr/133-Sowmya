package com.marticus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("Second")
@Scope("prototype")
public class Second {
	
	@Autowired
	private Third third;

	public Third getThird() {
		return third;
	}

	public void setThird(Third third) {
		this.third = third;
	}


	public void sayHello()
	{
		
		System.out.println("Hello from Injected bean!!!");
		
	}
	
}
