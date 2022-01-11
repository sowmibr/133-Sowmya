package springmvcexample.utility;

import static org.junit.Assert.*;

import org.junit.Test;

import springmvcexample.utility.Calculator;

public class CalculatorTest {

	
	@Test
	public void testAdd() {
		Calculator cal= new Calculator();
				assertTrue(cal.add(2,3)==5);
	}
	
	@Test
	public void testSub() {
		Calculator cal= new Calculator();
				assertTrue(cal.sub(2,3)==5);

}
}

