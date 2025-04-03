import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    console.log("Stored User Data:", storedUser);

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Parse once
        console.log("Parsed User Data:", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing userData:", error);
        localStorage.removeItem("userData");
        navigate("/login");
      }
    } else {
      console.warn("No userData found, redirecting...");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className="pt-5 w-25">
      <Card className="shadow-lg p-4">
        <Card.Body>
          <h2 className="text-center mb-4">User Dashboard</h2>
          <p><strong>Name:</strong> {user.name || "Not Available"}</p>
          <p><strong>Vehicle Number:</strong> {user.vehicleNumber || "Not Available"}</p>
          <p><strong>Balance:</strong> {user.balance  ? `₹${user.balance}` : "Not Available"}</p>
          <p><strong>Bank Account:</strong> {user.bankAccount || "Not Available"}</p>

          <Button variant="danger" onClick={handleLogout} className="w-100 mt-4">
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
