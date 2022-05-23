package com.revature;

import com.revature.dao.IReimDaoJDBC;
import com.revature.dao.UserDaoJDBC;
import com.revature.models.Reimburse;
import com.revature.models.User;
import com.revature.services.ReimService;
import com.revature.services.UserService;
import org.junit.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ServiceTest {

//    @BeforeClass
//    public void notMuch(){}

    @Before
    public void registrationBeforeTest(){
        MockitoAnnotations.openMocks(this);
    }


//    @After
//    public void notMyThing(){}
//
//    @AfterClass
//    public void allReady(){}

    @Mock
    static UserDaoJDBC ud;

    @Mock
    static IReimDaoJDBC rd;

    @InjectMocks
    static UserService us;

    @InjectMocks
    static ReimService rs;

    @Test
    public void registrationTest(){
        doNothing().when(ud).createUser(any());
        us.registerUser("first", "last", "user", "email", "pass");
        verify(ud).createUser(any());
    }

    @Test
    public void loginTest(){
        User o = new User();
        o.setUsername("pass");
        o.setPassword("test");
        when((ud).login(any(),any())).thenReturn(o);
        User x = us.loginUser("pass","test");
        verify(ud).login(any(),any());
        assertEquals("test", x.getPassword(),"passing");
    }

    @Test
    public void idTest(){
        User o = new User();
        o.setUserId(1);
        o.setPassword("test");
        when((ud).getUserById(anyInt())).thenReturn(o);
        User x = us.getUserInfo(1);
        verify(ud).getUserById(anyInt());
        assertEquals("test", x.getPassword(),"passing");
    }

    @Test
    public void updateUserInfoTest(){
        User o = new User();
        o.setUsername("pass");
        o.setPassword("test");
        when((ud).updateUser(any())).thenReturn(o);
        User x = us.updateUserInfo(o);
        verify(ud).updateUser(any());
        assertEquals("test", x.getPassword(),"passing");
    }

    @Test
    public void readAllTest(){
        User o = new User();
        List<User> y = new ArrayList<>();
        o.setUsername("pass");
        o.setPassword("test");
        y.add(o);
        when((ud).readAllEmployees()).thenReturn(y);
        List<User> x = us.readAllEmployee();
        verify(ud).readAllEmployees();
        assertEquals("test", x.get(0).getPassword(),"passing");
    }

    @Test
    public void deleteTest(){
        doNothing().when(ud).deleteUser(anyInt());
        us.deleteUser(1);
        verify(ud).deleteUser(anyInt());
    }

    @Test
    public void addTicketTest(){
        doNothing().when(rd).createTicket(any());
        rs.addReimburse(1.0, "stuff", 1, 1);
        verify(rd).createTicket(any());
    }

    @Test
    public void readIdTicketTest(){
        Reimburse o = new Reimburse();
        List<Reimburse> y = new ArrayList<>();
        o.setReimburse_id(1);
        y.add(o);
        when((rd).getById(anyInt())).thenReturn(y);
        List<Reimburse> x = rs.readReimburse(1);
        verify(rd).getById(anyInt());
        assertEquals(1, x.get(0).getReimburse_id(),"passing");
    }

    @Test
    public void updateTicketTest(){
        Reimburse o = new Reimburse();
        o.setReimburse_id(1);
        when((rd).updateReimburse(any())).thenReturn(o);
        Reimburse x = rs.updateReim(1, 1, 1);
        verify(rd).updateReimburse(any());
        assertEquals(1, x.getReimburse_id(),"passing");
    }

    @Test
    public void getIdApproveTest(){
        Reimburse o = new Reimburse();
        List<Reimburse> y = new ArrayList<>();
        o.setReimburse_id(1);
        y.add(o);
        when((rd).getApprovedById(anyInt())).thenReturn(y);
        List<Reimburse> x = rs.getApprovedId(1);
        verify(rd).getApprovedById(anyInt());
        assertEquals(1, x.get(0).getReimburse_id(),"passing");
    }

    @Test
    public void getIdPendTest(){
        Reimburse o = new Reimburse();
        List<Reimburse> y = new ArrayList<>();
        o.setReimburse_id(1);
        y.add(o);
        when((rd).getPendingById(anyInt())).thenReturn(y);
        List<Reimburse> x = rs.getPendingId(1);
        verify(rd).getPendingById(anyInt());
        assertEquals(1, x.get(0).getReimburse_id(),"passing");
    }

    @Test
    public void getAllApproveTest(){
        Reimburse o = new Reimburse();
        List<Reimburse> y = new ArrayList<>();
        o.setReimburse_id(1);
        y.add(o);
        when((rd).getAllApproved()).thenReturn(y);
        List<Reimburse> x = rs.getAllApprove();
        verify(rd).getAllApproved();
        assertEquals(1, x.get(0).getReimburse_id(),"passing");
    }

    @Test
    public void getAllPendTest(){
        Reimburse o = new Reimburse();
        List<Reimburse> y = new ArrayList<>();
        o.setReimburse_id(1);
        y.add(o);
        when((rd).getAllPending()).thenReturn(y);
        List<Reimburse> x = rs.getAllPend();
        verify(rd).getAllPending();
        assertEquals(1, x.get(0).getReimburse_id(),"passing");
    }

    @Test
    public void lieDetection(){
        boolean tru = false;
        if(1==1){
            tru = true;
        }
        assertTrue(tru);
    }

}
