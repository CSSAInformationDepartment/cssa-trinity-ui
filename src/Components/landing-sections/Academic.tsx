import React, { Component } from 'react'
import BaseSection from  './Base';

export class AcademicSection extends Component {
    render() {
        return (
            <BaseSection 
                id="academic" 
                title= "校园"
                bgColor= "success">

                <p>
                    负责人：Mia、Arnold
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 墨城攻略校园部分快速入口
                    <br></br>
                    2. Academic Calendar中文版
                    <br></br>
                    3. 墨大网站常用功能快速链接(如：图书馆，LMS，选课系统，课表查询，Variation Form等)
                </p>
            </BaseSection>
        )
    }
}
