/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package arduinosample;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;

/**
 *
 * @author jskonst
 */
public class ServerCommunication {

    static String userName = "admin";
    static String password = "masterKey";
    public static final String LOGIN_PARAM_PASSWORD = "j_password";
    public static final String LOGIN_PARAM_USERNAME = "j_username";
    public static final String MAIN_URL = "http://localhost:8080/";
    public static final String LOGIN_MODULE = "j_security_check";
    public static final String MAIN_POINT = "application-start.html";

    public static int authRequest(String[] params, HttpContext httpContext, CookieStore cookieStore, HttpParams httpParams)
            throws IOException {
        //	TODO В случае если это 4 - перейти на новый тип
        List<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>(2);
        nameValuePairs.add(new BasicNameValuePair(
                LOGIN_PARAM_USERNAME,
                params[0]));
        nameValuePairs.add(new BasicNameValuePair(
                LOGIN_PARAM_PASSWORD,
                params[1]));

        HttpClient httpclient = HttpClientBuilder.create().build();

//		CookieStore cookieStore = new BasicCookieStore();
//		HttpContext httpContext = new BasicHttpContext();
//		HttpParams httpParams = new BasicHttpParams();
        httpParams.setParameter("http.protocol.handle-redirects", false);

        httpContext.setAttribute(ClientContext.COOKIE_STORE, cookieStore);

        HttpGet start = new HttpGet(MAIN_URL + MAIN_POINT);
        HttpPost login = new HttpPost(MAIN_URL
                + LOGIN_MODULE);
        login.setParams(httpParams);
        login.addHeader("accept", "application/json");

        HttpResponse response = httpclient.execute(start, httpContext);

        login.setEntity(new UrlEncodedFormEntity(nameValuePairs));
        response = httpclient.execute(login, httpContext);
        int code = response.getStatusLine().getStatusCode();
        return code;
    }

    
    
    
    public static void main(String[] args) {
        try {
            CookieStore cookies = new BasicCookieStore();
            HttpContext context = new BasicHttpContext();
            int result = ServerCommunication.authRequest(new String[]{userName, password}, context, cookies, new BasicHttpParams());
            
            System.out.println(result);
        } catch (IOException ex) {
            Logger.getLogger(ServerCommunication.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
}
