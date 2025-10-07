#!/usr/bin/env python3
"""
Generate AI-Ready Checklist PDF
This script creates a professional PDF checklist for download
"""

from fpdf import FPDF
import os

class ChecklistPDF(FPDF):
    def header(self):
        # Logo/Branding
        self.set_font('Arial', 'B', 24)
        self.set_text_color(99, 102, 241)  # Blue color
        self.cell(0, 15, 'AI-Ready Checklist', 0, 1, 'C')
        self.set_font('Arial', '', 12)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, 'Is Your Business Ready for AI Implementation?', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Martin Tamm | AI & Data Analysis Consultant | martin.t-amm@live.com | +372 56808182', 0, 0, 'C')

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 14)
        self.set_text_color(0, 0, 0)
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(2)

    def checklist_item(self, number, title, description):
        # Number circle
        self.set_fill_color(99, 102, 241)
        self.set_text_color(255, 255, 255)
        self.set_font('Arial', 'B', 12)
        self.circle(15, self.get_y() + 4, 4, 'F')
        self.set_xy(12, self.get_y() + 1)
        self.cell(6, 6, str(number), 0, 0, 'C')
        
        # Title
        self.set_xy(25, self.get_y() - 1)
        self.set_text_color(0, 0, 0)
        self.set_font('Arial', 'B', 12)
        self.multi_cell(0, 6, title)
        
        # Description
        self.set_x(25)
        self.set_font('Arial', '', 10)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 5, description)
        self.ln(3)

    def circle(self, x, y, r, style=''):
        self.ellipse(x - r, y - r, 2 * r, 2 * r, style)

def generate_checklist():
    pdf = ChecklistPDF()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)

    # Introduction
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(60, 60, 60)
    intro_text = (
        "Before investing in AI, it's crucial to assess your organization's readiness. "
        "This comprehensive checklist will help you evaluate your data infrastructure, "
        "team capabilities, and strategic alignment for successful AI implementation."
    )
    pdf.multi_cell(0, 6, intro_text)
    pdf.ln(8)

    # Checklist items (placeholder content)
    checklist_items = [
        {
            "number": 1,
            "title": "Data Infrastructure Assessment",
            "description": "Evaluate your current data collection, storage, and management systems. Ensure you have clean, structured data that can be accessed and analyzed efficiently."
        },
        {
            "number": 2,
            "title": "Team Capabilities & Skills",
            "description": "Assess your team's technical expertise and identify skill gaps. Determine whether you need to hire specialists or upskill existing team members."
        },
        {
            "number": 3,
            "title": "Strategic Business Alignment",
            "description": "Ensure AI initiatives align with your overall business strategy and objectives. Define clear success metrics and expected outcomes."
        },
        {
            "number": 4,
            "title": "Budget & Resource Allocation",
            "description": "Determine realistic budget requirements for AI implementation, including technology, talent, and ongoing maintenance costs."
        },
        {
            "number": 5,
            "title": "Change Management Readiness",
            "description": "Assess your organization's ability to adapt to new technologies and processes. Plan for employee training and stakeholder buy-in."
        },
        {
            "number": 6,
            "title": "Data Quality & Governance",
            "description": "Evaluate the quality, accuracy, and completeness of your data. Establish data governance policies and compliance procedures."
        },
        {
            "number": 7,
            "title": "Clear Use Case Definition",
            "description": "Identify specific business problems that AI can solve. Start with high-impact, achievable use cases rather than trying to implement AI everywhere."
        },
        {
            "number": 8,
            "title": "Technology Stack Evaluation",
            "description": "Review your current technology infrastructure and determine compatibility with AI tools. Identify necessary upgrades or integrations."
        },
        {
            "number": 9,
            "title": "Compliance & Ethical Considerations",
            "description": "Ensure AI implementation complies with relevant regulations (GDPR, etc.). Establish ethical guidelines for AI use in your organization."
        },
        {
            "number": 10,
            "title": "Success Metrics & KPIs",
            "description": "Define measurable success criteria for AI initiatives. Establish baseline metrics and set realistic improvement targets."
        }
    ]

    pdf.chapter_title("The 10-Point AI Readiness Checklist")
    
    for item in checklist_items:
        pdf.checklist_item(item["number"], item["title"], item["description"])

    # Next Steps section
    pdf.add_page()
    pdf.chapter_title("Next Steps")
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(60, 60, 60)
    next_steps_text = (
        "Now that you've reviewed this checklist, you should have a clearer picture of your "
        "organization's AI readiness. If you've identified gaps or need expert guidance on your "
        "AI journey, I'm here to help.\n\n"
        "I offer a complimentary 45-minute AI Opportunity Audit where we'll:\n"
        "  - Analyze your current data landscape\n"
        "  - Identify 3-5 high-impact AI opportunities\n"
        "  - Create a roadmap for successful implementation\n"
        "  - Answer your questions about AI adoption\n\n"
        "No commitment required. Let's explore how AI can transform your business."
    )
    pdf.multi_cell(0, 6, next_steps_text)
    pdf.ln(10)

    # Contact CTA
    pdf.set_fill_color(99, 102, 241)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font('Arial', 'B', 14)
    pdf.cell(0, 12, 'Schedule Your Free AI Opportunity Audit', 0, 1, 'C', True)
    pdf.ln(5)
    
    pdf.set_text_color(0, 0, 0)
    pdf.set_font('Arial', '', 11)
    pdf.cell(0, 6, 'Email: martin.t-amm@live.com', 0, 1, 'C')
    pdf.cell(0, 6, 'Phone: +372 56808182', 0, 1, 'C')
    pdf.cell(0, 6, 'Website: [Your Website URL]', 0, 1, 'C')

    # Save PDF
    output_path = os.path.join(os.path.dirname(__file__), 'public', 'downloads', 'ai-ready-checklist.pdf')
    pdf.output(output_path)
    print(f"✅ PDF generated successfully: {output_path}")

if __name__ == "__main__":
    generate_checklist()
