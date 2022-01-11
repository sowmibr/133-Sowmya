package springmvcexample;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class SampleTest {

	@BeforeClass
	public static void beforeClass() 
	{
		System.out.println("It will run before the first test method");
	}

	@AfterClass
	public static void AfterClass() {
		
		System.out.println("It runs after all the test methods in a class");
	}
	
	@Test
	public void Test() {
		System.out.println("TestCase");
		
	}

	@Before
	public void before() {
		System.out.println("It runs before each test");
	}

	@After
	public void after() {
         System.out.println("It runs after test methods");
	}

	@Test
	public void test() {
		fail("Not yet implemented");
	}

}
